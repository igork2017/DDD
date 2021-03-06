﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DDD.Security
{
    public class RequestAuthorizationBehavior<TRequest,TResponse>: IPipelineBehavior<TRequest, TResponse> 
        where TRequest:IRequest<TResponse>
    {
        private readonly IEnumerable<IAuthorizer<TRequest>> _authorizers;

        public RequestAuthorizationBehavior(IEnumerable<IAuthorizer<TRequest>> authorizers)
        {
            _authorizers = authorizers;
        }

        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            foreach (var authorizer in _authorizers)
            {
                var result = await authorizer.AuthorizeAsync(request, cancellationToken);
                if (!result.IsAuthorized)
                    throw new UnauthorizedException(result.FailureMessage);
            }

            return await next();
        }
    }
}
