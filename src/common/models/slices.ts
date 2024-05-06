import { VariantType } from 'notistack'

export interface ISnackbar {
  id: string | number
  kind: VariantType
  message: string
  isDismissed?: boolean
}
