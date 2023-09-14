import json
import pandas as pd

if __name__ == "__main__":
    QA_path = "./FAQ_Dataset.csv"
    df = pd.read_csv(QA_path)
    df.rename(columns={"Question":"instruction", "Response":"output"}, inplace=True)
    data = list()
    for i in range(df.shape[0]):
        data.append({"instruction" : df["instruction"][i].strip(), "input" : "", "output" : df["output"][i].strip()})

    with open("dataset.json", mode="w") as f:
        json.dump(data, f, indent=5)

