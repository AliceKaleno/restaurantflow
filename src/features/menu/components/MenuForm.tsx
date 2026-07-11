import FormInput from "@/components/shared/form/FormInput";
import FormTextarea from "@/components/shared/form/FormTextarea";
import FormSelect from "@/components/shared/form/FormSelect";
import FormSwitch from "@/components/shared/form/FormSwtich";

export default function MenuForm() {
  return (
    <div className="space-y-6">

      <FormInput
        label="Nome do prato"
        placeholder="Ex.: Pizza Calabresa"
      />

      <FormTextarea
        label="Descrição"
        placeholder="Descreva o prato..."
      />

      <FormSelect
        label="Categoria"
      />

      <FormInput
        label="Preço"
        placeholder="0,00"
      />

      <FormSwitch
        label="Disponível"
      />

    </div>
  );
}