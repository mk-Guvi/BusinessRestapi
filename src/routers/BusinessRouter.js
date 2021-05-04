const express = require('express')
const BusinessRouter = express.Router()
const Business = require('../models/Business.js')

BusinessRouter.get('/', async (req, res) => {
  //gett all company
  //res.send("<h3>author router</h3>");
  try {
    const result = await Business.find({})
    res.status(200).json({ result })
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: 'Server Error' })
  }
}) //search by company
  .post('/company', async (req, res) => {
    try {
      const result = await Business.findOne({
        company_name: req.body.company_name,
      }).exec()
      if (result) {
        res.status(200).json({ result, status: 'company Found' })
      } else {
        res.status(400).json({ status: 'No company Found' })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //search by owners
  .post('/owners', async (req, res) => {
    try {
      const result = await Business.findOne({
        owners: req.body.owners,
      }).exec()
      if (result) {
        res.status(200).json({ result, status: 'owner found' })
      } else {
        res.status(400).json({ status: 'No Owners Found' })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //Add new company
  .post('/', async (req, res) => {
    try {
      const { company_name, address, about, owners, employee_size } = req.body

      const found = await Business.findOne({
        company_name,
      }).exec()
      console.log(found)
      if (found) {
        res.json({ status: 'Company existed' })
      } else {
        const result = await new Business({
          company_name,
          address,
          about,
          owners,
          employee_size,
        }).save()
        res.status(200).json({ result, status: 'company Added' })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //delete by company
  .delete('/deleteCompany', async (req, res) => {
    try {
      const found = await Business.findOne({
        company_name: req.body.company_name,
      })
      if (found) {
        await Business.deleteOne({ company_name: req.body.company_name })
        res.status(200).json({ status: `company deleted ` })
      } else {
        res.status(400).json({ status: `no company found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //delete owner
  .delete('/deleteOwner', async (req, res) => {
    try {
      const found = await Business.findOne({
        owners: req.body.owners,
      })

      if (found) {
        await Business.update(
          { owners: req.body.owners },
          { $pull: { owners: req.body.owners } },
        )
        res.status(200).json({ status: `Owner deleted ` })
      } else {
        res.status(400).json({ status: `no owners found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //update employee size
  .put('/UpdateEmployeeSize', async (req, res) => {
    try {
      const found = await Business.findOne({
        company_name: req.body.company_name,
      })

      if (found) {
        await Business.update({ employee_size: req.body.employee_size })
        res.status(200).json({ status: `Employee updated  ` })
      } else {
        res.status(400).json({ status: `no Company found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //update company_name
  .put('/UpdateCompanyName', async (req, res) => {
    try {
      const found = await Business.findOne({
        company_name: req.body.company_name,
      })

      if (found) {
        await Business.findOneAndUpdate(
          { company_name: req.body.company_name },
          { company_name: req.body.updateCompany_name },
        )
        res.status(200).json({ status: `Company updated  ` })
      } else {
        res.status(400).json({ status: `no Company found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //update Owners_name
  .put('/UpdateOwnersName', async (req, res) => {
    try {
      const filter = { owners: req.body.owners }
      const update = {
        $push: { owners: req.body.updateOwners },
      }
      const found = await Business.findOne({
        owners: req.body.owners,
      })

      if (found) {
        await Business.findOneAndUpdate(filter, update)
        await Business.findOneAndUpdate(filter, {
          $pull: { owners: req.body.owners },
        })

        res.status(200).json({ status: `Owner updated` })
      } else {
        res.status(400).json({ status: `no Owner found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //Add owners
  .put('/AddOwnersName', async (req, res) => {
    try {
      const filter = { company_name: req.body.company_name }
      const update = { $addToSet: { owners: req.body.newOwner_name } }
      const found = await Business.findOne(filter)

      if (found) {
        await Business.findOneAndUpdate(filter, update)
        res.status(200).json({ status: `Owner updated` })
      } else {
        res.status(400).json({ status: `no Company found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  }) //
  .put('/UpdateAbout', async (req, res) => {
    try {
      const filter = { company_name: req.body.company_name }
      const update = { about: req.body.about }
      const found = await Business.findOne(filter)

      if (found) {
        await Business.findOneAndUpdate(filter, update)
        res.status(200).json({ status: `About updated` })
      } else {
        res.status(400).json({ status: `no Company found` })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'Server Error' })
    }
  })

module.exports = BusinessRouter
