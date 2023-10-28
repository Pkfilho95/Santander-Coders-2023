export class Task {
  static globalId: number = 1
  id: number
  title: string
  description: string
  date: Date
  status: IStatus
  tags?: string[]

  constructor( title: string = '', description: string = '', date: Date = new Date(), status: IStatus = 'toDo', tags = []) {
      
      this.id = Task.globalId
      this.title = title
      this.description = description
      this.date = date
      this.status = status
      this.tags = tags

      Task.globalId ++
  }
}

type IStatus = 'toDo' | 'inProgress' | 'Completed'
