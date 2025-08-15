# ARP-RDM3DC Website

A modern, responsive website for the ARP-RDM3DC project built with Flask.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, About, and Contact pages with navigation
- **Professional Styling**: Modern CSS with gradients, hover effects, and responsive layout
- **Easy to Deploy**: Simple Flask application that can be run locally or deployed

## Quick Start

### Method 1: Using start.py (Recommended)

Simply run the start script which will handle dependency installation and launch the website:

```bash
python3 start.py
```

### Method 2: Manual Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the Flask application:
```bash
python3 app.py
```

The website will be available at: http://localhost:5000

## Project Structure

```
ARP-RDM3DC/
├── app.py                 # Main Flask application
├── start.py               # Launcher script with auto-setup
├── requirements.txt       # Python dependencies
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Home page
│   ├── about.html        # About page
│   └── contact.html      # Contact page
└── static/               # Static assets
    └── css/
        └── style.css     # Main stylesheet
```

## Pages

- **Home**: Welcome page with hero section and feature highlights
- **About**: Information about the ARP-RDM3DC project mission and vision
- **Contact**: Contact information and contact form

## Technologies Used

- **Backend**: Flask 3.0.0 (Python web framework)
- **Frontend**: HTML5, CSS3 with modern responsive design
- **Styling**: Custom CSS with flexbox and grid layouts
- **Fonts**: System fonts (Segoe UI, etc.) for fast loading

## Development

To modify the website:

1. **HTML Templates**: Edit files in the `templates/` directory
2. **Styling**: Modify `static/css/style.css`
3. **Routes**: Add new routes in `app.py`
4. **Dependencies**: Update `requirements.txt` as needed

## Deployment

For production deployment, consider using:
- **Gunicorn**: Production WSGI server
- **Nginx**: Reverse proxy and static file serving
- **Docker**: Containerized deployment
- **Cloud platforms**: Heroku, AWS, Google Cloud, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is part of the ARP-RDM3DC research initiative.