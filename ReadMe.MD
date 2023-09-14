# LLama2 Student assistant chatbot

As the name already says, the goal of this repo is to develop a virtual assistant, which can help
answering all students questions relative to the university applied science`s system (THM).
The intelligent chatbot is powered by the second version of the Facebook's large language model [LLama2](https://ai.meta.com/llama/).
The 7B pretrained instruction model was the one used for this project. It was finetuned with a question/answer dataset 
composed of old students' questions and responses. 
Therefore, the backend of this project is made with python and [LLama recipes](https://github.com/facebookresearch/llama-recipes) python lib. 
Visit the repo and follow the steps if you want to know about the how-tos regarding finetuning. As for the frontend I managed to use
Node.js & React.

# Installation
* Clone this repo `git clone https://github.com/pericles01/LLama2-Student-Assistant-Chatbot`
* Navigate into the repo ``LLama2-Student-Assistant-Chatbot``

## Frontend
* Navigate into the `frontend` folder `cd Chatbot/frontend`
* Install the dependencies ``npm install``
* Start the frontend with ``npm run dev``

## Backend
* Navigate into the `backend` folder `cd Chatbot/backend`
* Create a fresh python/conda virtual environment & Install the dependencies ``pip3 install -r requirements.txt``
* Run this file will start the backend webserver required to interact with the frontend's api ``python3 inference.py``

## Download & fine-tune a LLama Model
### Download
Visit the [meta official website]((https://ai.meta.com/llama/)) or/and [huggingface website](https://huggingface.co/models?sort=trending&search=meta-llama%2FLlama) to download a 
Llama model

### Fine Tuning 
Visit the [LLama recipes](https://github.com/facebookresearch/llama-recipes) repo & follow the steps.

### Custom dataset
You may have to fine tune your model with a custom dataset. For a question/answering system, you can use the alpaca dataset pipline,
that is already defined in the repo. But you can set your json dataset file in the [ft_datasets](./llama-recipes/ft_datasets) folder
and specify the data path in ``./llama-recipes/configs/datasets.py`` script by the alpaca_dataset.data_path attribute.
For other fine-tuning uses with custom dataset, you can follow the steps describe in the llama recipe repo.

## Please give this repo a Star ⭐ if you found it helpful.

