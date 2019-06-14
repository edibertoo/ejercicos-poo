function isMultiple(valor, multiple)
        {
            var resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }
print(isMultiple(6,3))
