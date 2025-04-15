import os
from PIL import Image

def generate_image_page(image_dir, output_dir='output'):
    """
    Generate an HTML file for a single image directory.
    
    Args:
        image_dir (str): Directory containing images
        output_dir (str): Directory to save HTML files
    """
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Get folder name for title and filename
    folder_name = os.path.basename(image_dir).capitalize()
    output_file = os.path.join(output_dir, f'{folder_name.lower()}.html')
    
    # Get list of image files
    image_files = [f for f in os.listdir(image_dir) 
                  if f.endswith(('.jpg', '.png', '.gif'))]
    
    # Create HTML content
    html_content = f'''
    <html>
    <head>
    
        <title>{folder_name} Images</title>
        <style>
        body {{
        margin:25px 0;
            background-color: #708474;
            padding: 20px;
        }}
        .grid {{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
        }}
        .grid img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-width: 600px;
        }}
        input {{
            width: 10px;
            height: 10px;
            display: none;
        }}
        label {{
            display: grid;
            place-content: center;
            border: 2px solid #0ff;
        }}
        input:checked + label {{
            background: #000c;
            position: fixed;
            inset: 10px;
            border-color: blue;
        }}
        input:checked + label img {{
            width: 100%;
        }}
        button{{
         position:fixed;
         top:10px;
         right:10%;
         transform:translate(-50%,0);
         color: khaki;
         background:#2225;
         padding:2px;
        }}
        @media only screen and (max-width: 650px) {{
            .grid {{
                grid-template-columns: repeat(3, 1fr);
            }}
        }}
        h1{{
        position:fixed;
        top:20px;
        color: khaki;
        }}
        </style>
        
    </head>
    <body>
    
     <button onclick="window.history.back()">Go back!</button>
        <h1>{folder_name}</h1>
        <div class="grid">
    '''

    # Add images to HTML content
    for cnt, image_file in enumerate(image_files):
        rel_path = os.path.join('..', image_dir, image_file)
        html_content += f'''
            <input type="checkbox" id="check{cnt}">
            <label for="check{cnt}">
                <div class="imagcontainer">
                <img src="{rel_path}" alt="{image_file}">
                </div>
            </label>
        '''

    html_content += '''
        </div>
    </a>
    </html>
    '''

    # Write HTML content to file
    with open(output_file, 'w') as f:
        f.write(html_content)
    return folder_name, output_file

def generate_index_page(image_dirs, output_dir='output'):
    """
    Generate an index HTML file with links to all image pages.
    
    Args:
        image_dirs (list): List of directories containing images
        output_dir (str): Directory to save HTML files
    """
    # Generate individual pages and collect links
    links = []
    for image_dir in image_dirs:
        folder_name, page_file = generate_image_page(image_dir, output_dir)
        rel_path = os.path.basename(page_file)
        links.append((folder_name, rel_path))
    
    # Create index HTML content
    index_content = '''
    <html>
    <head>
        <title>Image Gallery Index</title>
        <style>
            body {
            display:grid;
            place-content:center;
                background-color: #708474;
                margin: 0;
                padding: 20px;
                font-family: Arial, sans-serif;
            }
            h1 {
                color: white;
            }
            .link-list {
                list-style: none;
                padding: 0;
            }
            .link-list li {
                margin: 10px 0;
            }
            .link-list a {
                color: #0ff;
                text-decoration: none;
                font-size: 1.2em;
            }
            .link-list a:hover {
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1>Image Galleries</h1>
        <ul class="link-list">
    '''
    
    for folder_name, rel_path in links:
        index_content += f'''
            <li><a href="{rel_path}">{folder_name}</a></li>
        '''
    
    index_content += '''
        </ul>
    </body>
    </html>
    '''
    
    # Write index file
    with open(os.path.join(output_dir, 'index.html'), 'w') as f:
        f.write(index_content)

# Example usage
image_dirs = ['./img/Stairs', './img/decks', './img/flooring', './img/kitchen', './img/millwork', './img/Bathrooms']
generate_index_page(image_dirs, 'output')
