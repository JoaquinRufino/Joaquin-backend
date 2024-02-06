const PATH = './ropa.json';
import { Blob } from 'buffer';
const size = new Blob ([data]).size

const asyncTask = async () => {

    let data = await fs.promises.readFile(PATH, 'utf-8')
    console.log (data)

    let result = JSON.parse(data)
    console.log("result: ", result)

    let name = result.name
    console.log("name: ", name)

}

asyncTask()
