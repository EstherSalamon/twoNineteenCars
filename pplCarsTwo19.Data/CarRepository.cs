using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pplCarsTwo19.Data
{
    public class CarRepository
    {
        private readonly string _connection;

        public CarRepository(string connection)
        {
            _connection = connection;
        }

        public List<Car> GetCars()
        {
            using CarsDataContext context = new CarsDataContext(_connection);
            return context.Cars.OrderBy(c => c.Year).ToList();
        }

        public void AddCar(Car c)
        {
            using CarsDataContext context = new CarsDataContext(_connection);
            context.Cars.Add(c);
            context.SaveChanges();
        }
    }
}
