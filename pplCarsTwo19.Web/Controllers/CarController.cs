using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pplCarsTwo19.Data;
using pplCarsTwo19.Web.Models;

namespace pplCarsTwo19.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly string _connection;

        public CarController(IConfiguration config)
        {
            _connection = config.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getcars")]
        public List<Car> GetCars()
        {
            CarRepository repo = new CarRepository(_connection);
            return repo.GetCars();
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(AddCarVM advm)
        {
            CarRepository repo = new CarRepository(_connection);
            repo.AddCar(advm.Car);
        }
    }
}
