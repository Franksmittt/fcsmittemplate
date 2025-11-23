import os
import shutil

# AUTO-GENERATED UNDO SCRIPT
# RUNNING THIS WILL DELETE THE FILES CREATED BY THE SEO INSTALLER

FILES_TO_REMOVE = ['C:\\Users\\User1\\mvvppaint\\src\\data\\locations.ts', 'C:\\Users\\User1\\mvvppaint\\src\\app\\locations\\[city]\\page.tsx', 'C:\\Users\\User1\\mvvppaint\\src\\app\\blog\\[pillar]\\[cluster]\\opengraph-image.tsx', 'C:\\Users\\User1\\mvvppaint\\src\\components\\analytics\\gtm-partytown.tsx']
BACKUPS_TO_RESTORE = {}

def main():
    print("=== STARTING UNDO PROCESS ===")
    
    # 1. Remove created files
    for file_path in FILES_TO_REMOVE:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                print(f"[DELETED] {file_path}")
                # Try to remove empty parent directories
                try:
                    os.rmdir(os.path.dirname(file_path))
                    print(f"[CLEANED DIR] {os.path.dirname(file_path)}")
                except OSError:
                    pass # Directory not empty
            except Exception as e:
                print(f"[ERROR] Could not delete {file_path}: {e}")
        else:
            print(f"[SKIP] File not found: {file_path}")

    # 2. Restore backups
    for original, backup in BACKUPS_TO_RESTORE.items():
        if os.path.exists(backup):
            try:
                shutil.move(backup, original)
                print(f"[RESTORED] {original} from backup")
            except Exception as e:
                print(f"[ERROR] Could not restore {original}: {e}")

    print("=== UNDO COMPLETE. YOUR PROJECT IS RESTORED. ===")

if __name__ == "__main__":
    main()
