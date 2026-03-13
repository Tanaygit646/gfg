from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()
llm = ChatOpenAI(model="gpt-4o-mini")


@tool
def sql_generator(question: str, db_schema: str) -> str:
   """
      Generate SQL query using the given schema.
   """
   prompt = f"""
You are an expert SQL generator.
Schema:{db_schema}
User Question:{question}
Generate only the SQL query."""
   
   response = llm.invoke(prompt)
   print(response.content)
   return response.content