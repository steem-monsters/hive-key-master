# hive-key-master

## Explanation

This script makes it easy to manage authorities (keys, accounts) and set the threshold (how many authorities are needed to broadcast a transaction) of your Hive account. Use-case could be that you want to share access to your Hive account and thus Splinterlands game with other people (i.e. guild members), but need a way to revoke access, without having to change your primary key.

```
> hive-key-master@1.0.0 start
> ts-node --transpile-only src/index.ts

This script will allow you to add/remove posting/active keys on your Hive account

[1] my-amazing-sl-gamer-tag
[2] Enter account name
[0] CANCEL

Choose Hive account or enter a new account [1, 2, 0]: 1

----------------------------------

[1] posting
[2] active
[3] owner
[0] CANCEL

Choose the authority type [1, 2, 3, 0]: 1

----------------------------------

[1] add
[2] remove
[0] CANCEL

Choose the method [1, 2, 0]: 2

----------------------------------

[1] STM3VdgAyyrJCV2MwhZEKgm4Hv2Kr5rXuAWaxcc33ZfsnxeycqUru
[2] STM6B1bDpK6d59LVLWx2tEvFUiNaJn4PLw3LQWBDZs25x5EzZ4YcG
[0] CANCEL

Choose key to remove [1, 2, 0]: 2

----------------------------------

Enter the private active key needed to broadcast the transaction to the blockchain: ***************************************************

----------------------------------

Review {
  account: 'my-amazing-sl-gamer-tag',
  authorityType: 'posting',
  method: 'remove',
  pubKey: 'STM6B1bDpK6d59LVLWx2tEvFUiNaJn4PLw3LQWBDZs25x5EzZ4YcG',
  privateKey: 'omitted'
}

Do you want to update your account keys based on the above data? [y/n]: y
Broadcasting to the blockchain. Please wait.
Result: SUCCESS { id: '41b816d58c54f0dbab7882445103e45329ac005e' }

Do you want to save the backup? [y/n]: y
Saved backup to backups/1654084095284-my-amazing-sl-gamer-tag-remove-posting.txt
```

## How to run

```
npm i
npm start
```

## Optional

If you'd like, you can copy over the .env.example as .env and save the accounts + private keys that you often need to change keys for

```
BROADCAST_ACCOUNTS=`[
    ["exampleAccount1", {"active": "YOUR_ACTIVE_KEY1", "owner": ""}]
    ["exampleAccount2", {"active": "YOUR_ACTIVE_KEY2", "owner": ""}]
]`
```

## Please Read

This script has been tested and is supposed to work, but please use it with caution. In any case, the author of this script will not take responsibility for bugs, if you remove the wrong keys or lock yourself out of your Hive account/lose access to funds/tokens.
