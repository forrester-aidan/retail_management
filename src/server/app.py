from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# This function will read your Kaggle dataset and extract customer names
def get_customer_names():
    # Assuming your dataset is a CSV file (you can adjust this if needed)
    dataset_path = '../../public/retail_sales_dataset.csv' # Replace with the path to your Kaggle dataset
    try:
        df = pd.read_csv(dataset_path)
    except Exception as e:
        print(f"Error loading CSV: {e}")
        return None
    
    # Adjust this line based on your dataset's column name for customer names
    customer_ids = df.head(30).to_dict(orient='records')
    
    return customer_ids

@app.route('/api/customers', methods=['GET'])
def get_customers():
    customers_ids = get_customer_names()
    return jsonify(customers_ids)

if __name__ == '__main__':
    app.run(debug=True)