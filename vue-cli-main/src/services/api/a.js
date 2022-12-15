import serviceAxios from "@/services/http";

export const sendSms = (params) => {
  return serviceAxios({
    url: "/app/sms/sendSms",
    method: "get",
    params,
  });
};
