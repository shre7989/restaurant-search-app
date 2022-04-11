import axios from "axios";

const apiKey =
  "fhtMfPwJRWN8rD4o7Rv1od9wz7BeXzl_c8UPUx6TtBR_k-lj23C8B3W3JLy9iL27dYCmHr1fSh-lQ57oRp4WGUTtVPy1z3AxOs_AQK59_TBC-N4jC4plFf9_SZFSYnYx";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
