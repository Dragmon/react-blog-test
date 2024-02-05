import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function NewPost() {
  const [newPost, setNewPost] = useState(false);
  const [errorFetch, setErrorFetch] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const URL = import.meta.env.VITE_REACT_APP_API_URL;

  const onSubmit = async (data) => {
    setErrorFetch();
    setNewPost([]);
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then(setNewPost(true))
      .catch((error) => setErrorFetch(error.message));
    reset();
  };

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[350px] lg:w-[600px]">
        <CardHeader>
          {errorFetch ? (
            <CardTitle className="text-sm text-red-800">
              Ocurrio un error {errorFetch}
            </CardTitle>
          ) : null}
          {newPost ? (
            <CardTitle className="text-sm text-green-800">
              Su post se guardo con exito {newPost}
            </CardTitle>
          ) : null}
          <CardTitle>Nuevo Artículo</CardTitle>
          <CardDescription>
            Rellene los campos del formulario para dar de alta un nuevo
            artículo, todos los campos son obligatorios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <Label htmlFor="title">Titulo</Label>
              <Input
                className="my-2 bg-white border-black"
                type="text"
                {...register('title', {
                  required: {
                    value: true,
                    message: 'El titulo es un campo obligatorio',
                  },
                })}
              />
              {errors.title && (
                <span className="text-xs text-red-800 mt-2">
                  {errors.title.message}
                </span>
              )}
            </>
            <>
              <Label htmlFor="author">Nombre del autor</Label>
              <Input
                className="my-2 bg-white border-black"
                type="text"
                {...register('author', {
                  required: {
                    value: true,
                    message: 'El autor es un campo obligatorio',
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'El campo solo puede tener texto',
                  },
                })}
              />
              {errors.author && (
                <span className="text-xs text-red-800 mt-2">
                  {errors.author.message}
                </span>
              )}
            </>
            <>
              <Label htmlFor="content">Contenido</Label>
              <Textarea
                className="my-2 bg-white border-black"
                {...register('content', {
                  required: {
                    value: true,
                    message: 'El contenido es un campo obligatorio',
                  },
                })}
              />
              {errors.content && (
                <span className="text-xs text-red-800 mt-2">
                  {errors.content.message}
                </span>
              )}
            </>
            <Button className="mt-5">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
