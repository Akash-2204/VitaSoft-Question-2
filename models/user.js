const db = require('../util/database');

module.exports = class User {
  constructor(
    firstName,
    lastName,
    middleName,
    email,
    password,
    address,
    city,
    country,
    state,
    phoneNumber,
    pincode,
    height,
    weight
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.city = city;
    this.country = country;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.pincode = pincode;
    this.height = height;
    this.weight = weight;
  }

  static find(email) {
    return db.execute("SELECT * FROM users WHERE email = ?", [email]);
  }

  static save(user) {
    return db.execute(
      "INSERT INTO users (firstName, lastName, middleName, email, password, address, city, country, state, phoneNumber, pincode, height, weight ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ",
      [
        user.firstName,
        user.lastName,
        user.middleName,
        user.email,
        user.password,
        user.address,
        user.city,
        user.country,
        user.state,
        user.phoneNumber,
        user.pincode,
        user.height,
        user.weight,
      ]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }

  static delete(id) {
    return db.execute('DELETE FROM users WHERE id =?',[id]);
  }
};