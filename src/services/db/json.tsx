import { compressToBase64 } from "lz-string";
import { altogic, AltogicResponse } from "src/api/altogic";

type JSON = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  private: boolean;
  json: string;
};

const saveJson = async ({ id, data }): Promise<AltogicResponse<{ _id: string }>> => {
  const compressedData = compressToBase64(data);

  if (id) {
    return await altogic.endpoint.put(`json/${id}`, {
      json: compressedData,
    });
  }

  return await altogic.endpoint.post("json", {
    json: compressedData,
  });
};

const getAllJson = async (): Promise<AltogicResponse<{ result: JSON[] }>> =>
  await altogic.endpoint.get(`json`);

const updateJson = async (id: string, data: object) =>
  await altogic.endpoint.put(`json/${id}`, {
    ...data,
  });

const deleteJson = async (id: string) => await altogic.endpoint.delete(`json/${id}`);

export { saveJson, getAllJson, updateJson, deleteJson };
