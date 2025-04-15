import os

dir_name = './img/Stairs'
test = os.listdir(dir_name)

for item in test:
    if item.endswith(".webp"):
        os.remove(os.path.join(dir_name, item))
