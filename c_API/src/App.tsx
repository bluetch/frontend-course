import React, { useEffect, useState, memo } from "react";
import axios from 'axios';
import { jobSpec } from "./data/jobs";

export const Loading = () => {
  return (
    <div style={{ margin: "30px auto", textAlign: "center" }}>
      <img src="/images/icon_loading.svg" alt="" className="mx-auto w-10 my-10" />
      <p className="text-center">讀取中，請稍候...</p>
    </div>
  );
}

export const nameMapping = (key: any, data: any, itemAll = false) => {
  if (!key) return;
  if (!data) return;
  let result;
  data.map((item: any) => {
    if (key === item.name) {
      if (itemAll) {
        return (result = item);
      } else {
        return (result = item.code);
      }
    }
    return false;
  });
  return result || key;
};

function App() {
  const googleSheetApiUrl = "https://script.google.com/macros/s/AKfycbxhrXJ3YdCyPKljf_X4NToey4g5DkkLJjSfCHyYQX7BOT8o6jT2wkLjYKAfgs75EfB_lw/exec";
  const [jobList, setJobList] = useState<any | null>([]);
  const [loading, setLoading] = useState(false);

  const getData = async (url: string, id: number = 0) => {

    setLoading(true);

    await axios
      .get(`${url}?${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        res.data.jobs.map((item: any) => {
          item.departmentCode = nameMapping(
            item.department,
            jobSpec.departments.items
          );
        });
        setJobList(res.data.jobs);
        setLoading(false);
        // console.log("res.data", res.data.jobs);
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  };

  const fetchData = async (url: string, id: number = 0) => {
    const data = await fetch(`${url}?${id}`,)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData(googleSheetApiUrl, 0);
    // fetchData(googleSheetApiUrl, 0);
  }, []);

  if (loading) return <Loading />

  return (
    <div className="App" style={{ width: "80%", margin: "0 auto" }}>
      <h1>Career API demo</h1>
      {jobList.map((item: any, index: number) => {
        return (
          <div key={index} style={{ "borderBottom": "1px solid gray" }}>
            <h3>{item.jobName}</h3>
            <p>{item.department}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
