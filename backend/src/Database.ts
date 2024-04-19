//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { TransactionsEntity } from './db/Transactions.entity';
import { AccountsEntity } from './db/Accounts.entity';
import { MembersEntity } from './db/Members.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      TransactionsEntity,
      AccountsEntity,
      MembersEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          mobileNumber: 'mobileNumber 1',
          accountNumber: 'accountNumber 1',
          password: 'password 1',
          id: 10,
        },
        {
          mobileNumber: 'mobileNumber 2',
          accountNumber: 'accountNumber 2',
          password: 'password 2',
          id: 50,
        },
        {
          mobileNumber: 'mobileNumber 3',
          accountNumber: 'accountNumber 3',
          password: 'password 3',
          id: 19,
        },
        {
          mobileNumber: 'mobileNumber 4',
          accountNumber: 'accountNumber 4',
          password: 'password 4',
          id: 8,
        },
        {
          mobileNumber: 'mobileNumber 5',
          accountNumber: 'accountNumber 5',
          password: 'password 5',
          id: 79,
        },
      ],
      Transactions: [
        { earning: 0.51, amount: 0.63, id: 9 },
        { earning: 0.26, amount: 0.72, id: 78 },
        { earning: 0.95, amount: 0.62, id: 56 },
        { earning: 0.76, amount: 0.98, id: 73 },
        { earning: 0.3, amount: 0.54, id: 20 },
      ],
      Accounts: [
        {
          accountNumber: 'accountNumber 1',
          accountHoldersName: 'accountHoldersName 1',
          bankName: 'bankName 1',
          ifscCode: 'ifscCode 1',
          balance: 0.53,
          id: 18,
        },
        {
          accountNumber: 'accountNumber 2',
          accountHoldersName: 'accountHoldersName 2',
          bankName: 'bankName 2',
          ifscCode: 'ifscCode 2',
          balance: 0.28,
          id: 56,
        },
        {
          accountNumber: 'accountNumber 3',
          accountHoldersName: 'accountHoldersName 3',
          bankName: 'bankName 3',
          ifscCode: 'ifscCode 3',
          balance: 0.83,
          id: 78,
        },
        {
          accountNumber: 'accountNumber 4',
          accountHoldersName: 'accountHoldersName 4',
          bankName: 'bankName 4',
          ifscCode: 'ifscCode 4',
          balance: 0.55,
          id: 15,
        },
        {
          accountNumber: 'accountNumber 5',
          accountHoldersName: 'accountHoldersName 5',
          bankName: 'bankName 5',
          ifscCode: 'ifscCode 5',
          balance: 0.66,
          id: 74,
        },
      ],
      Members: [
        {
          memberID: 'memberID 1',
          name: 'name 1',
          mobileNumber: 'mobileNumber 1',
          emailAddress: 'emailAddress 1',
          joiningDate: '2023-05-26T19:21:49.194Z',
          id: 99,
        },
        {
          memberID: 'memberID 2',
          name: 'name 2',
          mobileNumber: 'mobileNumber 2',
          emailAddress: 'emailAddress 2',
          joiningDate: '2023-10-02T03:06:01.046Z',
          id: 42,
        },
        {
          memberID: 'memberID 3',
          name: 'name 3',
          mobileNumber: 'mobileNumber 3',
          emailAddress: 'emailAddress 3',
          joiningDate: '2024-11-13T10:46:56.262Z',
          id: 86,
        },
        {
          memberID: 'memberID 4',
          name: 'name 4',
          mobileNumber: 'mobileNumber 4',
          emailAddress: 'emailAddress 4',
          joiningDate: '2023-08-02T07:43:53.349Z',
          id: 75,
        },
        {
          memberID: 'memberID 5',
          name: 'name 5',
          mobileNumber: 'mobileNumber 5',
          emailAddress: 'emailAddress 5',
          joiningDate: '2024-04-12T01:42:36.677Z',
          id: 0,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('TransactionsEntity', data.Transactions);
      await this.SeedResource('AccountsEntity', data.Accounts);
      await this.SeedResource('MembersEntity', data.Members);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}