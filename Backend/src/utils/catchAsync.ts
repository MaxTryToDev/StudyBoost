import {Response, Request, NextFunction} from 'express';

export default  (fn: CallableFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
