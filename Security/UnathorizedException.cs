﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDD.Security
{
    public class UnauthorizedException : Exception
    {
        public UnauthorizedException(string message):base(message)
        {
        }
    }
}
