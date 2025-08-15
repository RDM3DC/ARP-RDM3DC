# ARP-RDM3DC Repository

ARP-RDM3DC is a minimal Python repository currently containing a single starter file (`start.py`). This repository provides a foundation for Python development and can be extended with additional functionality.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup
- Python 3.12.3 is available at `/usr/bin/python3`
- No additional dependencies or package installations are required for the base repository
- No virtual environment setup is necessary (though you may create one if adding dependencies)

### Basic Operations
- **Validate Python environment**: `python3 --version` -- takes < 1 second
- **Run the main file**: `python3 start.py` -- takes < 1 second  
- **Validate Python syntax**: `python3 -m py_compile start.py` -- takes < 1 second
- **Test Python functionality**: `python3 -c "print('Hello from ARP-RDM3DC repository')"` -- takes < 1 second

### Build Process
- **No build process required**: This repository contains only a single Python file with no complex build requirements
- **No dependencies to install**: No `requirements.txt`, `setup.py`, or `pyproject.toml` files exist
- **No compilation needed**: Python files run directly without compilation

### Testing
- **No existing test suite**: Currently no test files or testing framework is configured
- **Manual validation**: Run `python3 start.py` to verify the code executes without errors
- **Syntax validation**: Always run `python3 -m py_compile start.py` before committing changes

## Validation

### Manual Validation Scenarios
After making any changes to the repository, always perform these validation steps:

1. **Basic functionality test**: 
   ```bash
   cd /path/to/ARP-RDM3DC
   python3 start.py
   ```
   Expected: No errors, program exits with code 0

2. **Syntax validation**:
   ```bash
   python3 -m py_compile start.py
   ```
   Expected: No syntax errors, silent success

3. **File integrity check**:
   ```bash
   python3 -c "
   with open('start.py', 'r') as f:
       content = f.read()
   assert '#start' in content or len(content.strip()) > 0, 'start.py should not be empty'
   print('✓ File integrity check passed')
   "
   ```
   Expected: File integrity confirmation message

### Development Workflow Validation
When extending the repository:

1. **Create new Python files**: Test that new `.py` files can be created and executed
2. **Import functionality**: Verify that new modules can import and use `start.py` if needed
3. **Error handling**: Ensure that any new code handles errors appropriately

### Timing Expectations
- **All operations complete in < 1 second**: This is a minimal repository with no build process
- **NEVER CANCEL**: While no long-running commands exist currently, always let any new build processes complete
- **No timeout concerns**: Current operations are too fast to require special timeout handling

## Common Tasks

### Repository Navigation
```bash
# Repository root contents
ls -la
# Output: .git/ start.py

# Check repository status  
git status
# Shows current branch and any uncommitted changes

# View current file content
cat start.py
# Output: #start
```

### Extending the Repository
When adding new functionality:

1. **Add dependencies**: Create `requirements.txt` if external packages are needed
2. **Add tests**: Create a `tests/` directory with appropriate test files
3. **Add documentation**: Update this file or create additional documentation
4. **Add build scripts**: Create build automation if complexity increases

### Common Development Commands
```bash
# Check Python environment
python3 --version

# Run any Python file
python3 filename.py

# Validate syntax for any Python file
python3 -m py_compile filename.py

# Interactive Python session (for debugging)
python3

# Check file structure
find . -name "*.py" -type f
```

## Important Locations

### Key Files
- **`start.py`**: Main entry point file (currently minimal with just a comment)
- **`.git/`**: Git repository metadata
- **`.github/copilot-instructions.md`**: This instructions file

### File Locations
- **Repository root**: `/home/runner/work/ARP-RDM3DC/ARP-RDM3DC` (when running in GitHub Actions)
- **All Python files**: Currently only `start.py` in repository root
- **No configuration files**: No complex configuration exists currently

## Troubleshooting

### Common Issues
- **Python not found**: Ensure Python 3 is installed, available at `/usr/bin/python3`
- **File not found**: Ensure you're in the repository root directory
- **Permission errors**: Files should be readable and executable by the current user

### Emergency Recovery
- **Restore original state**: `git checkout start.py` to restore the original minimal file
- **Check git history**: `git log --oneline` to see previous commits
- **Verify environment**: `python3 --version` to confirm Python availability

## Development Guidelines

### Code Standards
- Use Python 3.12+ compatible syntax
- Follow PEP 8 style guidelines (no automated enforcement currently configured)
- Test all changes manually before committing

### Before Committing
1. Run `python3 -m py_compile *.py` to validate syntax
2. Test execution of any modified Python files
3. Verify that changes don't break existing functionality (minimal as it is)

### Extending Instructions
When adding complexity to this repository:
- Update this file with new build processes and their timing
- Add specific validation scenarios for new functionality  
- Document any new dependencies or setup requirements
- Include "NEVER CANCEL" warnings for any processes taking > 2 minutes