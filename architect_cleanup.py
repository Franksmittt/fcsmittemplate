# architect_cleanup.py
import os
import re

# --- Configuration ---
PROJECT_ROOT = os.getcwd()

# Files that need their content updated (import and usage)
PAGES_TO_UPDATE = [
    'src/app/about-us/page.tsx',
    'src/app/services/page.tsx',
    'src/app/contact/page.tsx',
]

# The path for the new reusable component
NEW_CTA_PATH = 'src/components/cta-final-strip.tsx'


# Map of files to the specific Lucide/Next imports that need removal to fix ESLint errors
UNUSED_IMPORTS_MAP = {
    # About Us: Removed Layers, Home, Factory
    'src/app/about-us/page.tsx': r'(\{.*?)(?:\s*Layers,?)?(?:\s*Home,?)?(?:\s*Factory,?)?(\s*\}\s*from\s*[\'"]lucide-react[\'"])',

    # Services: Imports look clean based on last error report, but we'll re-check general Lucide cleanup.
    # Note: The manual CtaFinalStrip import will be handled by simple find/replace.
    'src/app/services/page.tsx': r'(\s*Home,?)', # Removing Home and Factory which were unused in services (based on manual code block)
    
    # Contact: Removed redundant Link import from next/link (line 7)
    'src/app/contact/page.tsx': r'import Link from \'next/link\';', # Targeting the redundant import on line 7
}

# --- Core Logic ---

def create_cta_component():
    """Creates the CtaFinalStrip component file."""
    print(f"--- Creating New Component: {NEW_CTA_PATH} ---")
    
    # Ensure src/components exists
    os.makedirs(os.path.join(PROJECT_ROOT, 'src/components'), exist_ok=True)
    
    content = """// src/components/cta-final-strip.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

// This component centralizes the high-conversion, final Call-to-Action strip.
// It applies the mobile-specific text removal logic for better UX (using hidden md:inline).

export function CtaFinalStrip() {
    return (
        <section className="bg-header-dark py-12 px-4 border-t border-primary/50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                    Ready for Verifiable, Zero-Risk Quality?
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                    Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
                </p>
                 <Button asChild 
                    className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-xl h-14 shadow-2xl transform hover:scale-105"
                >
                    <a href="tel:0826277082" className="flex items-center space-x-2">
                         <Phone className="w-6 h-6" />
                         <span className="hidden md:inline">Call Lawrence Brooks:</span> 082 627 7082
                    </a>
                </Button>
            </div>
        </section>
    );
}
"""
    with open(os.path.join(PROJECT_ROOT, NEW_CTA_PATH), 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ CtaFinalStrip.tsx created successfully.")

def update_pages_to_use_cta():
    """Removes manual CTA block and inserts the new CtaFinalStrip component import and usage."""
    
    print("\n--- 2. Updating Pages: Replacing Manual CTA with Reusable Component ---")
    
    for relative_path in PAGES_TO_UPDATE:
        full_path = os.path.join(PROJECT_ROOT, relative_path)
        if not os.path.exists(full_path):
            print(f"❌ File not found: {relative_path}. Skipping update.")
            continue
            
        try:
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # --- A. CLEANUP: Remove Unused Imports (Fixing last ESLint errors) ---
            if relative_path in UNUSED_IMPORTS_MAP:
                pattern = UNUSED_IMPORTS_MAP[relative_path]
                
                # Special handling for the redundant 'import Link from "next/link";' on line 7 of contact/page.tsx
                if relative_path == 'src/app/contact/page.tsx' and pattern == r'import Link from \'next/link\';':
                    # Find the explicit import Link from next/link (assumed line 7, but check content)
                    content = re.sub(r'import Link from [\'"]next/link[\'"];', '', content)
                else:
                    # Generic Lucide cleanup logic (removing unwanted icons from the import list)
                    lucide_import_pattern = r'(import\s+\{.*?\}\s+from\s+[\'"]lucide-react[\'"];)'
                    def clean_lucide_group(match):
                        icons_part = match.group(0)
                        cleaned_icons_part = re.sub(pattern, r'\1', icons_part) # r'\1' keeps the group capture if needed
                        
                        # Apply secondary cleanup to remove double commas or leading/trailing commas left by the first pass
                        cleaned_icons_part = re.sub(r',(\s*,)', ',', cleaned_icons_part)
                        cleaned_icons_part = re.sub(r'\{\s*,', '{', cleaned_icons_part)
                        cleaned_icons_part = re.sub(r',\s*\}', '}', cleaned_icons_part)
                        return cleaned_icons_part
                    
                    content = re.sub(lucide_import_pattern, clean_lucide_group, content, flags=re.DOTALL)
            
            # --- B. ADD: Import new CtaFinalStrip component ---
            # Define the import to inject
            new_import = 'import { CtaFinalStrip } from \'@/components/cta-final-strip\'; // <-- NEW REUSABLE CTA\n'
            
            # Insert the new import below the existing CtaFinalStrip import (if it exists)
            if 'CtaFinalStrip' not in content:
                # Find the existing reusable imports block (e.g., QaProcessModule import)
                qa_import_pattern = re.compile(r'(import\s+\{\s*QaProcessModule\s*\}\s+from\s*[\'"]@/components/qa-process-module[\'"];)', re.MULTILINE)
                content = re.sub(qa_import_pattern, r'\1\n' + new_import, content)
            
            # --- C. REPLACE: Find and replace the manual CTA block ---
            # Pattern for the manual CTA section (Module 6 in about-us/services, Module 2 in contact)
            # This relies on finding the unique text and the surrounding <section> tags.
            
            # The search space starts at the end of the previous known module (AccreditationsStrip)
            # We must handle the contact page's unique structure slightly differently.
            
            if relative_path == 'src/app/contact/page.tsx':
                # Target the MODULE 2 (FOOTER CTA STRIP) section in contact page
                cta_start_text = r'\{\/\*\s*--- MODULE 2: FOOTER CTA STRIP \(WhatsApp Focus\)\s*--- \*\/\}.*?<\/section>'
                # The contact page's final CTA is different and uses WhatsApp, so we keep that unique section.
                # The ABOUT/SERVICES page block is the one we want to replace.
                # We'll skip replacing the contact page's unique WhatsApp CTA for now, as the error was only on line 7's import.
                # However, since the goal is to refactor, we replace the final common block.
                # Let's replace the final CTA on all three pages with the new CtaFinalStrip, 
                # and put the WhatsApp component *back* manually on the contact page if needed.
                
                # The manual CTA structure to remove (Module 6 in about-us/services)
                manual_cta_pattern = re.compile(r'\{\/\*\s*--- MODULE 6: FINAL CTA STRIP \(Conversion Funnel\)\s*--- \*\/\}.*?<\/section>', re.DOTALL)
                content = re.sub(manual_cta_pattern, r'{/* --- MODULE 6: FINAL CTA STRIP (Conversion Funnel) --- */}\n\t\t\t<CtaFinalStrip />', content, flags=re.DOTALL)

                # Special case: Contact page's bottom CTA is WhatsApp focused. We'll leave it as is 
                # but ensure the Link import is gone (handled in section A).
                
            else: 
                # For about-us and services (Module 6)
                manual_cta_pattern = re.compile(r'\{\/\*\s*--- MODULE 6: FINAL CTA STRIP \(Conversion Funnel\)\s*--- \*\/\}.*?<\/section>', re.DOTALL)
                content = re.sub(manual_cta_pattern, r'{/* --- MODULE 6: FINAL CTA STRIP (Conversion Funnel) --- */}\n\t\t\t<CtaFinalStrip />', content, flags=re.DOTALL)

            
            # --- D. Final cleanup of artifact imports ---
            # Remove Phone icon import from about-us/services/contact as it's now in CtaFinalStrip
            content = re.sub(r'(\s*,?\s*Phone\s*,?)', '', content)
            
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
                
            print(f"✅ Refactored {relative_path} to use CtaFinalStrip and cleaned imports.")
            
        except Exception as e:
            print(f"❌ Error processing {relative_path}: {e}")
            print(f"Detail: {e}")


def run_automation():
    """Runs the full sequence of automation steps."""
    
    # 1. Create safety net (already done by the user!)
    
    # 2. Create the new component file
    create_cta_component()
    
    # 3. Update all pages to use the new component and clean up unused imports
    update_pages_to_use_cta()
    
    print("\n\nAutomation complete. Ready for verification.")


if __name__ == "__main__":
    # Ensure we are in the main context before running anything
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    # For safety, let's revert to the original logic structure for Python path.
    # We will assume the user has switched to the correct directory.
    run_automation()