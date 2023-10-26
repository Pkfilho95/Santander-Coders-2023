export class Task {
  static globalId: number = 1
  id: number
  title: string
  description: string
  date: Date
  status: IStatus

  constructor(title: string = '', description: string = '', date: Date = new Date(), status: IStatus = 'toDo') {
      this.id = Task.globalId
      this.title = title
      this.description = description
      this.date = date
      this.status = status

      Task.globalId ++
  }
}

type IStatus = 'toDo' | 'inProgress' | 'Completed'
