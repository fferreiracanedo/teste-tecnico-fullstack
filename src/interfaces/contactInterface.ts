

export interface IcontactRequest {
  name: string,
  emails: string,
  tel: string,
  ownerId: string
}

export interface IcontactUpdate {
  name?: string,
  emails?: string,
  tel?: string,
}