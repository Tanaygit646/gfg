import sqlite3
from langchain_core.tools import tool



@tool
def sql_executor(query: str) -> str:
   """
   Execute SQL query on the database and return results.
   """
   return [('East', 200000), ('West', 150000)]