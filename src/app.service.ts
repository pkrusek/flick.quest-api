import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getItems() {
    return [
      {
        name: 'Jan Mikes',
        email: 'jan.mikes@gmail.com',
      },
      {
        name: 'Pavel Krusek',
        email: 'pavel.krusek@gmail.com',
      },
    ]
  }
}
