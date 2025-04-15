import os
from PIL import Image

def generate_image_grid(image_dirs, output_file, num_images=42):
    """
    Generate an HTML file to display images in a grid layout from multiple directories.

    Args:
        image_dirs (list): List of directories containing images
        output_file (str): Output HTML file
        num_images (int, optional): Number of images to display. Defaults to 42.
    """

    # Get list of image files from all directories
    image_files = []
    for image_dir in image_dirs:
        dir_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) 
                    if f.endswith(('.jpg', '.png', '.gif'))]
        image_files.extend(dir_files)
    
    # Shuffle and select images
    selected_images = image_files[:min(num_images, len(image_files))]
    
    # Create HTML content
    html_content = '''
    <html>
    <head>
        <title>Image Grid</title>
        <style>
        ::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    /* border-radius: 5px; */

}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #ccc5;
    /* border-radius: 5px 0 0 5px; */
    /* box-shadow: inset 5px -5px 5px rgba(58, 114, 60, 1); */
}
        body{
        background-color:#708474;}
           .grid {
                margin:10px;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 10px;
            }
           .grid img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                max-width:600px;
            }
             input{
             width:10px;
             height:10px;
             display:none;
            }
            label{
              display:grid;
              place-content:center;
                border: 2px solid #0ff;
            }
            input:checked + label{
                background:#000c;
                position:fixed;
                inset: 10px;
                border-color:blue;
            }
            input:checked + label img{
            width:100%;
            }
           @media only screen and (max-width: 650px){
           .grid{
           grid-template-columns: repeat(3, 1fr);
           }
           }
        </style>
    </head>
    <body>
   
        <div class="grid">
    '''

    # Add images to HTML content
    cnt = 0
    for image_path in selected_images:
        # Get the relative path from the image_dirs
        rel_path = image_path
        
        html_content += f'''
         <input type="checkbox" id="check{cnt}">
        <label for="check{cnt}">
            <div class="imagcontainer">
            <img src="{rel_path}" alt="{os.path.basename(image_path)}">
            </div>
            </label>
        ''' 
        cnt += 1

    html_content += '''
        </div>
    </body>
    </html>
    '''

    # Write HTML content to output file
    with open(output_file, 'w') as f:
        f.write(html_content)

# Example usage with multiple directories
image_dirs = ['./img/Stairs', './img/decks', './img/flooring', './img/kitchen', './img/millwork', './img/Bathrooms']  # Add your directories here
output_file = 'image_grid.html'
generate_image_grid(image_dirs, output_file, 30)
