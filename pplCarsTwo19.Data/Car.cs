using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pplCarsTwo19.Data
{
    public class Car
    {
        public int ID { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Price { get; set; }
        public CarType CarType { get; set; }
        public bool HasLeatherSeats { get; set; }

    }

    public enum CarType
    {
        Sedan,
        SUV,
        Supercar
    }
}
