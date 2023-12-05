files_to_dupe = [
    "StatBlock__PrismaticRedAdult.svelte", "StatBlock__PrismaticRedAncient.svelte",
    "StatBlock__PrismaticRedCosmic.svelte", "StatBlock__PrismaticRedWyrmling.svelte", "StatBlock__PrismaticRedYoung.svelte",
]

colors_to_make = [
    "Yellow", "Green", "Blue",
    "Indigo", "Violet", "Magenta", "White", "Black"
]

for file in files_to_dupe:
    file_text = ""
    with open(file, 'r') as fp:
        file_text = fp.read()
    for color in colors_to_make:
        new_file_name = file.replace('Red', color)
        new_file_text = file_text.replace('red', color.lower())
        with open(new_file_name, 'w') as fp:
            fp.write(new_file_text)
