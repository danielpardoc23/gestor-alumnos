export class Student {

  private _id: string;
  private _name: string;
  private _lastname1: string;
  private _lastname2?: string;
  private _email: string;
  private _dni: string;
  private _mobile: string;
  private _secondMobile?: string;
  private _country: string;
  private _province: string;
  private _cp: number;
  private _location: string;
  private _nickname: string;
  private _password: string;

  constructor(id: string, name: string, lastname1: string, email: string, dni: string, mobile: string, country: string, province: string, cp: number,
    location: string, nickname: string, password: string, lastname2?: string, secondMobile?: string){
    this._id = id;
    this._name = name;
    this._lastname1 = lastname1;
    if(!!lastname2 && lastname2.length > 0){
      this._lastname2 = lastname2;
    }
    this._email = email;
    this._dni = dni;
    this._mobile = mobile;
    if(!!secondMobile && secondMobile.length > 0){
      this._secondMobile = secondMobile;
    }
    this._country = country;
    this._province = province;
    this._cp = cp;
    this._location = location;
    this._nickname = nickname;
    this._password = password;
  }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get lastname1(): string {
        return this._lastname1;
    }

    public set lastname1(lastname1: string) {
        this._lastname1 = lastname1;
    }

    public get lastname2(): string | undefined {
        return this._lastname2;
    }

    public set lastname2(lastname2: string | undefined) {
        this._lastname2 = lastname2;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get dni(): string {
        return this._dni;
    }

    public set dni(dni: string) {
        this._dni = dni;
    }

    public get mobile(): string {
        return this._mobile;
    }

    public set mobile(mobile: string) {
        this._mobile = mobile;
    }

    public get secondMobile(): string | undefined {
        return this._secondMobile;
    }

    public set secondMobile(secondMobile: string | undefined) {
        this._secondMobile = secondMobile;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

    public get province(): string {
        return this._province;
    }

    public set province(province: string) {
        this._province = province;
    }

    public get cp(): number {
        return this._cp;
    }

    public set cp(cp: number) {
        this._cp = cp;
    }

    public get location(): string {
        return this._location;
    }

    public set location(location: string) {
        this._location = location;
    }

    public get nickname(): string {
        return this._nickname;
    }

    public set nickname(nickname: string) {
        this._nickname = nickname;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

}
