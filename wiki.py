import sys
from tqdm import tqdm
import time
import wikipedia

def progress_bar():
	

	for _ in tqdm( range(100), desc="Extracting Url..."):
		time.sleep(0.01)

def main(page,file):
    search_term = sys.argv[1]
    
    url = wikipedia.page(search_term).url
    print(url)
    

    progress_bar()

    file_name = open(file, "a")
    file_name.write(url+ "\n")
    file_name.close()

	

if __name__ == "__main__":
    if len(sys.argv)<3:
        search_term =input('Enter page name')
        file_name = input('Enter File name')
        main(search_term,file_name)
    else:
        search_term = sys.argv[1]
        file_name=sys.argv[2]
        main(search_term,file_name)
