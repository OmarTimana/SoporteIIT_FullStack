import { Entity, Fields } from "remult"

@Entity("task", {
    allowApiCrud: true
})
export class Task{
    @Fields.autoIncrement()
    id=0

    @Fields.string()
    title=''

    @Fields.boolean()
    completed=false
}