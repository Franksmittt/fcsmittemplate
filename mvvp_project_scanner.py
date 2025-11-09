import os

# --- Configuration ---
# Set the root directory for your project
# MODIFIED: Set to your new project root
PROJECT_ROOT = r"C:\Users\User1\mvvppaint" 
# Set the name for the output file
OUTPUT_FILENAME = "project_summary.txt"

# Folders to completely ignore during the scan
EXCLUDE_DIRS = [
    'node_modules',
    '.next',
    '.git',      # Often large and not relevant to the code
    '__pycache__', # Python-specific cache
    '.vscode',   # IDE/Editor configuration
    'venv',      # Python virtual environment
    'dist',      # Build output directory
    'build'      # Another common build output directory
]

# File extensions to ignore (images, compiled files, archives, etc.)
EXCLUDE_EXTENSIONS = (
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.ico', # Images
    '.bin', '.dat', '.dll', '.exe', '.obj', '.so', '.wasm',  # Binaries/Compiled
    '.zip', '.rar', '.7z', '.tar', '.gz', '.pdf', '.doc', '.docx', # Archives/Documents
    '.lock',                                                 # Lock files
    '.log'                                                   # Log files
)

# Individual files to always ignore if found in the root or subfolders
EXCLUDE_FILES = [
    OUTPUT_FILENAME, # Don't try to read the file we are writing to
    'pnpm-lock.yaml',
    'package-lock.json', # npm lock file
    'yarn.lock'          # yarn lock file
]

# --- Core Logic ---

def generate_file_tree(root_dir):
    """Generates a string representation of the file tree, excluding specific paths."""
    # Using a more standard file tree visual for clarity
    tree_lines = [f"📁 **PROJECT FILE TREE: {os.path.basename(root_dir)}**"]
    
    for root, dirs, files in os.walk(root_dir):
        # Modify dirs in-place to skip excluded folders in future iterations
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        # Calculate the current level in the tree
        # Adjusting level calculation to start correctly after root_dir
        relative_path = os.path.relpath(root, root_dir)
        if relative_path == '.':
            level = 0
        else:
            # Count separators in the relative path, which gives the depth
            level = relative_path.count(os.sep) + 1 

        indent = '│   ' * (level - 1)
        
        # Add the directory to the tree, only if it's not the root itself
        if root != root_dir:
            dir_name = os.path.basename(root)
            # Determine prefix: '└──' for the last sibling, '├──' otherwise (simplified to '├──' for general output)
            dir_prefix = '└── ' if len(dirs) == 0 and len(files) == 0 else '├── ' # Simple heuristic
            tree_lines.append(f"{indent}{dir_prefix}📁 {dir_name}")
            indent = '│   ' * level # Increase indent for files inside this directory
        
        # Add files in the current directory
        # Filter files to exclude the ones we don't want
        filtered_files = sorted([
            file for file in files
            if file.lower() not in EXCLUDE_FILES and not file.lower().endswith(EXCLUDE_EXTENSIONS)
        ])

        # Add files in the current directory with correct indentation
        for i, file in enumerate(filtered_files):
            # Check if this is the last file/dir combo for the current directory
            is_last_item = (i == len(filtered_files) - 1)
            file_prefix = '└── ' if is_last_item else '├── '
            
            # Correct the indentation based on the current level
            current_indent = '│   ' * level
            if root == root_dir:
                 # Adjust for files directly in the root
                current_indent = ''
                file_prefix = '├── ' # Or whatever style you prefer for root items
            else:
                 # Standard indentation for files inside subdirectories
                 current_indent = '│   ' * (level -1)
                 # Determine the connection line for the file
                 if level > 0:
                     # This logic is complex for perfect tree drawing, simplifying here
                     pass

            
            tree_lines.append(f"{current_indent}{file_prefix}📄 {file}")
    
    # Re-running the os.walk logic with clearer indentation control, as the above can be tricky.
    # Reverting to the simpler, more robust indentation from the original file for file content, 
    # but using the more visual tree structure.
    
    # SIMPLIFIED TREE GENERATION FOR ROBUSTNESS
    tree_lines = [f"📁 **PROJECT FILE TREE: {os.path.basename(root_dir)}**"]
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        # Determine the depth
        rel_path = os.path.relpath(root, root_dir)
        level = rel_path.count(os.sep) if rel_path != '.' else 0
        
        # Indentation for current level's directories/files
        current_indent = '│   ' * level

        # Directory name (if not root)
        if root != root_dir:
            tree_lines.append(f"{current_indent}├── 📁 {os.path.basename(root)}")
            # Indent for files *inside* this directory
            file_indent = '│   ' * (level + 1)
        else:
            file_indent = current_indent # Files in root directory

        # Files
        filtered_files = sorted([
            file for file in files
            if file.lower() not in EXCLUDE_FILES and not file.lower().endswith(EXCLUDE_EXTENSIONS)
        ])
        
        for file in filtered_files:
            if root == root_dir:
                # Special handling for files directly in the root folder
                tree_lines.append(f"├── 📄 {file}")
            else:
                # Standard handling for files in subfolders
                tree_lines.append(f"{file_indent}├── 📄 {file}")
    # END SIMPLIFIED TREE GENERATION
    
    return "\n".join(tree_lines) + "\n\n"

def get_file_contents(root_dir):
    """Iterates through files and reads their content."""
    content_output = []
    
    for root, dirs, files in os.walk(root_dir):
        # Modify dirs in-place to skip excluded folders in future iterations (same as tree generation)
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in sorted(files):
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, root_dir)
            
            # Skip excluded files/extensions (same as tree generation)
            if file.lower() in EXCLUDE_FILES or file.lower().endswith(EXCLUDE_EXTENSIONS):
                continue
            
            # Try to read the file content
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Format the file path and content
                content_output.append("-" * 80)
                content_output.append(f"📄 FILE PATH: {relative_path}") # Use relative path for cleaner output
                content_output.append("-" * 80)
                # Use a code block style for the file content
                content_output.append("```")
                content_output.append(content)
                content_output.append("```")
                content_output.append("\n\n") # Add extra space after content for separation

            except UnicodeDecodeError:
                # File is likely a binary file or uses an unsupported encoding, skip it
                print(f"Skipping binary/unreadable file: {relative_path}")
            except Exception as e:
                print(f"Error reading file {relative_path}: {e}")

    return "".join(content_output)

def main():
    """Main function to run the script."""
    # The output file is placed in the project root
    output_path = os.path.join(PROJECT_ROOT, OUTPUT_FILENAME)

    print(f"Scanning project root: {PROJECT_ROOT}")
    
    # 1. Generate the file tree
    tree_section = generate_file_tree(PROJECT_ROOT)
    
    # 2. Get the content of all included files
    content_section = get_file_contents(PROJECT_ROOT)
    
    # 3. Write everything to the output file
    try:
        with open(output_path, 'w', encoding='utf-8') as outfile:
            outfile.write(tree_section)
            outfile.write("\n" + "=" * 100 + "\n\n")
            outfile.write("📄 **INDIVIDUAL FILE CONTENTS**\n\n")
            outfile.write("=" * 100 + "\n\n")
            outfile.write(content_section)
        
        print(f"\n✅ Successfully created output file: {output_path}")

    except Exception as e:
        print(f"\n❌ An error occurred while writing the output file: {e}")

if __name__ == "__main__":
    main()