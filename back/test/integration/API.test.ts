import axios from 'axios'

const serverUrl = `${process.env.SERVER_URL}:${process.env.PORT}`

describe('API', () => {
  describe('Indicator', () => {
    it.skip('should call API /indicators', async () => {
      const response = await axios.get(`${serverUrl}/indicators`)
      const items = response.data
      expect(items).toHaveLength(1)
    })

    it.skip('should call API /indicator/id/update to update current value of indicator', async () => {
      const indicators = await axios.get(`${serverUrl}/indicators`)
      const requestBody = { newValue: 20, indicatorId: indicators.data[0].id }
      const response = await axios.put(`${serverUrl}/indicators/update`, requestBody)
      const indicator = response.data
      expect(indicator.currentValue).toBe(requestBody.newValue)
    })

    it.skip('should call API POST /indicators to add a new Indicator', async () => {
      const newIndicator = {
        aquariumId: 1,
        name: 'Temperature',
        unit: 'celsius',
        description: 'Temperature of the reef',
        currentValue: 27,
        acceptedValue: 26,
        minValue: 26,
        maxValue: 29
      }
      const response = await axios.post(`${serverUrl}/indicators`, newIndicator)
      expect(response.data.name).toBe(newIndicator.name)
    })
  });

  describe('Aquarium', () => {
    it.skip('should call API /aquariums', async () => {
      const response = await axios.get(`${serverUrl}/aquariums`)
      const items = response.data
      expect(items).toHaveLength(1)
    })

    it.skip('should call API POST /aquariums to add a new aquarium', async () => {
      const requestBody = { name: 'IuryReef', dimensions: { length: 50, width: 40, height: 40 } }
      const response = await axios.post(`${serverUrl}/aquariums`, requestBody)
      expect(response.data.name).toBe(requestBody.name)
    })
  });
})
