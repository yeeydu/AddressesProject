
# AddressesProject

Full Stack Project API for Addresses with (C#, :Net, SQL, React).

This is a ASP.NET core web API with SQL database and JWT token for authentication.

## Run Locally

Clone the project

```bash
  git clone https://github.com/yeeydu/AddressesProject.git
```

#### Back end:
Enter project directory you will see a AddressesAPi folder that is the back end code, you need to open it with Visual Studio or VSCode.

#### Front end:
Another forlder with AddressClient witch is the front end code, a React app.

```bash
  cd my-project
```

Install dependency

```bash
  npm install
```

Start Server

```bash
  npm run dev
```


## Shared Variables

To make project normal fuctionallity, you must enter values for these two variables in the shared component. Depending on the system you are using, the DotNet Api can have different port.

#### "The project localhost directory"
export const baseUrl = "https://localhost:7071/api/Address";

#### "The JWTtoken"
export const JWTtoken = "eyklj423lk5j3l6jlk3n63ç4kj347ç"

Paste the token from the swagger login token generated:

1. To get the token access swagger /api/Auth/register to register with a name and password.
2. login with the name and password created in last step /api/Auth/register , the system will generate a token for you, something like:

"eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiZXhwIjoxNjk0ODU4NzMzfQ.uv9BLUhuh1Gm3ZZVs35488ohpU-mWIqV9TUD1cBPeyqdymKzlg00ErEwX8M-0FpQ0ltFQT9kaKAOsCflFOSWnA"

3. Click on the "Authorize" button on the top and paste the token with bearer at front like this:
```bash
bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiZXhwIjoxNjk0ODU4NzMzfQ.uv9BLUhuh1Gm3ZZVs35488ohpU-mWIqV9TUD1cBPeyqdymKzlg00ErEwX8M-0FpQ0ltFQT9kaKAOsCflFOSWnA
```

Once you paste the token you will have access to the api.
You have to paste the same token in the JWTtoken variable in the shared component so you can access API in the front end app.
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## API Documentation

#### Return all items

```http
  GET /api/Address/getall
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `JWTtoken` | `string` | **Obrigatório**. API authentication token |

#### Return one item

```http
  GET /api/Address/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. ID for item  |

#### DELETE one item

```http
  DELETE /api/Address/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. ID for item|

#### Add item

```http
  POST /api/Address/
```

#### Update item

```http
  PUT /api/Address/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. ID for item |

 


## Funcionalities

- Full CRUD app
- Real time
- Responsive



## Stack 

**Front-end:** React, Bootstrap

**Back-end:** .Net, SQL


## 🔗 Links
[![portfolio](https://yeeysonduarte.vercel.app)](https://yeeysonduarte.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yeeyson-duarte-6545041a7/)


