import os
import time
from github import Github
import json


def run():
    max_cost = float(os.environ['INPUT_MAX_COST'])
    print('::notice::Starting to spend all your money 💸')
    
    step_size = max_cost / 10
    remaining = max_cost
    
    for i in range(10, -1, -1):
        remaining = round(step_size * i, 2)
        print(f'::debug::Remaining budget: ${remaining}')
        time.sleep(1)
    
    print('echo "All money spent! 🎉"')
    
    # Set output
    with open(os.environ['GITHUB_OUTPUT'], 'a') as gh_output:
        print(f'remaining-budget={remaining}', file=gh_output)

if __name__ == '__main__':
    run()
