import { ExampleTypes } from "@/types";
import { apiUtil } from "@/utils";

const path = "/example";

const transformResponse = (streamData: string) => {
  const rawList: Array<ExampleTypes.Main> = JSON.parse(streamData);
  const data = rawList.reduce(
    (datas: Array<[number, ExampleTypes.Main]>, data) => {
      datas.push([data.id, data]);
      return datas;
    },
    []
  );

  return data;
};

const listExampleItem = async () => {
  return await apiUtil.handler<ExampleTypes.Main>({
    url: path,
    transformResponse,
  });
};

const addExampleItem = async ({ data }: { data: ExampleTypes.Main["name"] }) =>
  await apiUtil.handler<string, ExampleTypes.Main["name"]>({
    method: "post",
    url: path,
    data,
  });

const updateExampleItem = async (data: ExampleTypes.Main) =>
  await apiUtil.handler<string, ExampleTypes.Main>({
    method: "put",
    url: `${path}/${data.id}`,
    data,
  });

const deleteExampleItem = async ({ id }: { id: ExampleTypes.Main["id"] }) =>
  await apiUtil.handler<string>({ method: "delete", url: `${path}/${id}` });

export const exampleAPI = {
  list: listExampleItem,
  add: addExampleItem,
  update: updateExampleItem,
  delete: deleteExampleItem,
};
