declare namespace API {
  type Demo = {
    id?: number;
    name?: string;
  };

  type listUsingGET1Params = {
    id?: number;
    name?: string;
  };

  type ResponseGenericListSpaceResponse = {
    content?: SpaceResponse[];
    message?: string;
    success?: boolean;
  };

  type SpaceResponse = {
    category1Id?: number;
    category2Id?: number;
    cover?: string;
    description?: string;
    id?: number;
    loveCount?: number;
    name?: string;
    viewCount?: number;
    wikiCount?: number;
  };

  type Test = {
    id?: number;
    name?: string;
    password?: string;
  };
}
