require('../config/db.js')
const bcrypt = require('bcrypt')
const express = require('express')
const Admin = require('../models/Admin')
const compareHash = require('../services/hash')
const adminTokenManager = require('../services/adminTokenManager')
const AdminRouter = express.Router()

AdminRouter.post('/login', async (req, res) => {
  try {
    const { adminName, password } = req.body
    const admin = await Admin.findOne({ adminName }).exec()
    if (admin) {
      const result = await compareHash(password, admin.passwordHash)
      if (result) {
        const jwtToken = adminTokenManager(adminName)
        res.cookie('jwt', jwtToken, {
          httpOnly: true,
          secure: true, //this will send the cookies for only https conections
        })
        res.status(200).json({ status: 'success', jwtToken })
      } else {
        res
          .status(400)

          .json({ status: 'Invalid user/password' })
      }
    } else {
      res
        .status(400)

        .json({ status: 'Invalid user/password' })
    }
  } catch (e) {
    console.error(e)
    res
      .status(500)

      .json({ status: 'Internal server serror' })
  }
})
  .post('/addAdmin', async (req, res) => {
    //since generatehash is async  process we make the function as async
    const saltrounds = 10

    const generateHash = (plainText) => {
      return new Promise((resolve, reject) => {
        bcrypt.hash(plainText, saltrounds, (err, hash) => {
          if (err) {
            reject(err)
          } else {
            resolve(hash)
          }
        })
      })
    }
    const { adminName, password } = req.body
    const admin = {
      adminName,
      password,
    }
    try {
      //since we use await we need to use try-catch block
      const result = await new Admin({
        adminName: admin.adminName,
        passwordHash: await generateHash(admin.password),
      }).save()
      res.status(200).json({ result }).then(console.log).catch(console.error)
    } catch (e) {
      console.error(e)
    }
  })
  .get('/', async (req, res) => {
    try {
      const admin = await Admin.find({})
      res.status(200).json({ admin })
    } catch (e) {
      console.error(e)
      res.status(500).send('internal server error')
    }
  })

module.exports = AdminRouter
