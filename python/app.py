import chainlit as cl
import httpx

HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2"

headers = {"Authorization": f"Bearer"}

async def query_huggingface(payload):
    async with httpx.AsyncClient(timeout=None) as client:
        response = await client.post(HUGGINGFACE_API_URL, headers=headers, json=payload)
        return response.json()

@cl.on_chat_start
async def on_chat_start():
    await cl.Message(
        content="Hello! I'm your health AI assistant. How can I help you today?"
    ).send()

@cl.on_message
async def main(message: cl.Message):
    msg = await cl.Message(content="").send()

    try:
        data = await query_huggingface({"inputs": message.content})
        if isinstance(data, dict) and data.get("error"):
            msg.content = f"Error: {data['error']}"
        else:
            generated_text = data[0]['generated_text']
            msg.content = generated_text

    except Exception as e:
        msg.content = f"An unexpected error occurred: {str(e)}"

    await msg.update()

@cl.set_starters
async def set_starters():
    return [
        cl.Starter(
            label="Refine my email",
            message="Can you correct and refine my email for clarity?",
            icon="/public/idea.svg",
        ),
        cl.Starter(
            label="Explain in layman's terms",
            message="Explain the following term/subject in simple terms:",
            icon="/public/learn.svg",
        ),
        cl.Starter(
            label="Fix grammatical errors",
            message="Review and fix grammatical errors in the following statement:",
            icon="/public/terminal.svg",
        ),
        cl.Starter(
            label="Debug code",
            message="Help me debug the following code:",
            icon="/public/write.svg",
        )
    ]
