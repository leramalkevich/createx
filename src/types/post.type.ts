export type PostType = {
  id: string,
  form: string,
  image:string,
  title:string,
  description:string,
  link:string,
  addInfo: {
    sphere:string,
    date:string,
    timeToConsume?: string
  }
}
