// 用户操作接口
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
