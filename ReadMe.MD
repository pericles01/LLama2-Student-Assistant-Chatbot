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

If you have any issue with the bitsandbytes library, then you may have to compile it from source for it to support cuda and
8-bits quantization. Please read this repo: https://github.com/TimDettmers/bitsandbytes
## Download & fine-tune a LLama Model
### Mandatory requirements
To successfully fine-tune LLaMA 2 models, you will need the following:

* Fill [Meta’s form](https://ai.meta.com/llama/) to request access to the next version of Llama. 
Indeed, the use of Llama 2 is governed by the Meta license, that you must accept in order to download the model weights and tokenizer.
* Have a [Hugging Face](https://huggingface.co/) account (with the same email address you entered in Meta’s form).
* Have a [Hugging Face token](https://huggingface.co/docs/hub/security-tokens).
* Visit the [page of one of the LLaMA 2](https://huggingface.co/models?sort=trending&search=meta-llama) available models (version 7B, 13B or 70B), and accept Hugging Face’s license terms and acceptable use policy.
* Log in to the Hugging Face model Hub from your notebook’s terminal by running the ``huggingface-cli login`` command, and enter your token. You will not need to add your token as git credential.
* Powerful Computing Resources: Fine-tuning the Llama 2 model requires substantial computational power. 

When every thing is set correctly, you don't need to download any Llama model because you can make use of
the transformers library. You can simply enter the name of a model hosted in the hugging face hub:
```bash
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-chat-hf")
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-chat-hf")
```
### Fine Tuning 
Visit the [LLama recipes](https://github.com/facebookresearch/llama-recipes) repo & follow the steps.

### Custom dataset
You may have to fine tune your model with a custom dataset. For a question/answering system, you can use the alpaca dataset pipline,
that is already defined in the repo. But you can set your json dataset file in the [ft_datasets](./llama-recipes/ft_datasets) folder
and specify the data path in the [datasets.py](./llama-recipes/configs/datasets.py) script by the alpaca_dataset.data_path attribute.
For other fine-tuning uses with custom dataset, you can follow the steps describe in the llama recipe repo.

## Please give this repo a Star ⭐ if you found it helpful.

