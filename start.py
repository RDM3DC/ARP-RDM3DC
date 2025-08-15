#!/usr/bin/env python3
"""
ARP-RDM3DC Website Launcher
This script starts the Flask web application for the ARP-RDM3DC project.
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required dependencies"""
    try:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'])
        print("Dependencies installed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error installing dependencies: {e}")
        return False

def start_website():
    """Start the Flask web application"""
    try:
        print("Starting ARP-RDM3DC website...")
        print("The website will be available at: http://localhost:5000")
        print("Press Ctrl+C to stop the server")
        
        # Import and run the Flask app
        from app import app
        app.run(debug=True, host='0.0.0.0', port=5000)
        
    except ImportError:
        print("Flask not found. Installing dependencies...")
        if install_requirements():
            from app import app
            app.run(debug=True, host='0.0.0.0', port=5000)
        else:
            print("Failed to install dependencies. Please install Flask manually:")
            print("pip install -r requirements.txt")
            sys.exit(1)
    except Exception as e:
        print(f"Error starting website: {e}")
        sys.exit(1)

if __name__ == '__main__':
    # Change to the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    print("ARP-RDM3DC Website Launcher")
    print("=" * 30)
    
    start_website()
