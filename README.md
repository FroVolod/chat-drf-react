# Chat

## Usage

1. Install Python 3.5 or newer

2. Install extra project modules buy issuing the following command from the terminal:

    ```
    cd "C:\path\to\the\project\folder"
    pip install -r requirements.txt
    ```
3. Run 'python manage.py migrate' to apply them.

4. Start server:

    ```
    python manage.py runserver
    ```

4. Install npm (npm is installed with Node.js)

5. Install extra project modules buy issuing the following command from the second terminal:

    ```
    cd "C:\path\to\the\project\folder\www"
    npm install
    ```

6. Start server:

    ```
    npm run dev
    ```
    {compiled successfully - ready on http://localhost:3000}

7. Register a new user:
    7.1
        ```
        curl -X POST http://localhost:8000/auth/users/ -d "username="user1"&password="user-1-pas""

            {"username":"user1","id":5}
        ```
    7.2
        In the browser click "Sign up" [Password must contain at least 8 characters.]

8. Login as user:
    In the browser click "Sign in"
