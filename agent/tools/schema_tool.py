from langchain_core.tools import tool

@tool
def schema_retriever():
   """
   retrieve relevent schema
   """
   return '''
Table: sales

Description:
This table stores all sales transactions.

Columns:
- date (DATE): date of transaction
- region (STRING): geographic region of sale
- product (STRING): product name
- revenue (FLOAT): revenue generated
- units (INTEGER): number of items sold
'''