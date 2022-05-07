export default class ApiClient {
  static baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static appId = 'LrvxRnL62iQbudHkJii8';

  static BOOKS_URL = `${`${this.baseUrl}/apps/${this.appId}/books`}`;

  static addBook = async (book) => {
    const response = await fetch(this.BOOKS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return response;
  };

  static fetchAPIBooks = async () => {
    const response = await fetch(this.BOOKS_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  };

  static removeBook = async (book) => {
    const response = await fetch(`${this.BOOKS_URL}/${book.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return response;
  };
}
