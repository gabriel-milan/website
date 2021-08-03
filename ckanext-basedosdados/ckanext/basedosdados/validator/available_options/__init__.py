from typing_extensions import Annotated
from typing import Optional, List, Union, Literal

from pydantic import Field, StrictStr as Str, BaseModel

# -------------------------------------
# MODULE OPTIONS
# -------------------------------------
from .availability import AvailabilityEnum
from .bigquery_type import BigQueryTypeEnum
from .spatial_coverage import ContinentEnum, CountryEnum, Admin1Enum, Admin2Enum
from .directory import DirectoryEnum
from .entity import EntityEnum
from .language import LanguageEnum
from .license import LicenseEnum
from .measurement_unit import MeasurementUnitEnum
from .status import StatusEnum
from .temporal_coverage import TemporalCoverageEnum
from .time_unit import TimeUnitEnum
from .yes_no import YesNoEnum

# -------------------------------------
# NEW OPTIONS
# -------------------------------------

IdType = Annotated[Optional[Str], Field()]  # TODO: would be nice to require on show/update but not on create
